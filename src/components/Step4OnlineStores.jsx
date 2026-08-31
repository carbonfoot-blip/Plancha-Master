import React, { useState } from 'react';
import {
  ExternalLink,
  Search,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  ShoppingCart,
  Store,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  TrendingDown,
  Info,
  RotateCcw,
  PlusCircle,
  Package,
  Layers
} from 'lucide-react';
import { GROCERY_CHAINS, cleanSearchQuery, formatGroceryListForClipboard } from '../utils/storeLinks';

export default function Step4OnlineStores({
  groceryDepartments,
  portions,
  selectedRecipes,
  onGoToStep3
}) {
  const [selectedChainId, setSelectedChainId] = useState('maxi');
  const [copied, setCopied] = useState(false);
  const [copiedMissing, setCopiedMissing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Suivi de l'état du panier : { [itemKey]: 'added' | 'missing' }
  const [cartStatus, setCartStatus] = useState({});

  const activeChain = GROCERY_CHAINS.find(c => c.id === selectedChainId) || GROCERY_CHAINS[0];

  const handleCopyFormattedList = () => {
    const formatted = formatGroceryListForClipboard(groceryDepartments, portions, selectedRecipes);
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Extraire tous les ingrédients sous forme de liste plate
  const allItems = [];
  Object.entries(groceryDepartments).forEach(([deptKey, dept]) => {
    if (deptKey === '_excludedItems' || !dept.items) return;
    dept.items.forEach((item) => {
      allItems.push({
        ...item,
        deptName: dept.name,
        deptIcon: dept.icon,
        cleanQuery: cleanSearchQuery(item.name)
      });
    });
  });

  const filteredItems = allItems.filter(i =>
    i.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Marquer un article comme ajouté ou non disponible
  const setItemStatus = (itemKey, status) => {
    setCartStatus(prev => {
      if (prev[itemKey] === status) {
        const next = { ...prev };
        delete next[itemKey];
        return next;
      }
      return { ...prev, [itemKey]: status };
    });
  };

  // Réinitialiser le statut du panier
  const handleResetCartStatus = () => {
    setCartStatus({});
  };

  const addedItemsCount = Object.values(cartStatus).filter(s => s === 'added').length;
  const missingItems = allItems.filter(item => cartStatus[item.key] === 'missing');

  const handleCopyMissingItems = () => {
    if (missingItems.length === 0) return;
    const text = `⚠️ ARTICLES NON AJOUTÉS / NON DISPONIBLES (${activeChain.name})\n` +
      missingItems.map(i => `• ${i.name} (${i.displayQuantity} ${i.displayUnit})`).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedMissing(true);
    setTimeout(() => setCopiedMissing(false), 2500);
  };

  return (
    <div className="step-page-container animate-fade-in" id="step-4-stores-screen">
      {/* Top Banner */}
      <div className="stores-header-bar">
        <div className="stores-header-info">
          <div className="hero-tagline">
            <span className="hero-pill">Étape 4 sur 4</span>
            <span className="hero-subpill">Bâtisseur de panier d'épicerie en ligne</span>
          </div>
          <h1 className="stores-page-title">Commandes en Ligne & Bâtisseur de Panier</h1>
          <p className="stores-page-subtitle">
            Bâtissez votre panier en 1 clic chez <strong>Maxi (PC Express), Super C, IGA, Metro ou Walmart</strong>. 
            Suivez les articles ajoutés et repérez facilement les articles non disponibles pour les remplacer.
          </p>
        </div>

        <div className="stores-header-actions">
          <button
            type="button"
            className="btn-copy-clipboard-big"
            onClick={handleCopyFormattedList}
            id="btn-copy-all-stores"
          >
            {copied ? <Check size={18} color="#16a34a" /> : <Copy size={18} />}
            <span>{copied ? 'Panier copié !' : 'Copier tout le panier'}</span>
          </button>
        </div>
      </div>

      {/* Grocery Chains Selection Tabs */}
      <div className="grocery-chains-selector" role="tablist">
        {GROCERY_CHAINS.map((chain) => {
          const isCurrent = chain.id === selectedChainId;

          return (
            <button
              key={chain.id}
              type="button"
              id={`tab-chain-${chain.id}`}
              className={`chain-tab-card ${isCurrent ? 'is-active-chain' : ''}`}
              onClick={() => setSelectedChainId(chain.id)}
              role="tab"
              aria-selected={isCurrent}
            >
              <div className="chain-logo-badge" style={{ backgroundColor: chain.bgColor, color: chain.themeColor }}>
                <Store size={18} />
                <span className="chain-logo-text">{chain.logoText}</span>
              </div>
              <span className="chain-tagline">{chain.tagline}</span>
            </button>
          );
        })}
      </div>

      {/* Active Chain Focus Card */}
      <div className="active-chain-banner" style={{ borderTopColor: activeChain.themeColor }}>
        <div className="active-chain-header">
          <div className="chain-info-group">
            <h3 className="chain-active-title">
              Commander chez <span style={{ color: activeChain.themeColor }}>{activeChain.name}</span>
            </h3>
            <p className="chain-active-desc">
              Cliquez sur <strong>"Chercher & Ajouter"</strong> pour ouvrir la recherche pré-remplie sur le site officiel de {activeChain.name}. Indiquez ensuite si l'article est ajouté au panier ou indisponible.
            </p>
          </div>

          <a
            href={activeChain.homeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-open-store-home"
            id="btn-open-active-store-home"
            style={{ backgroundColor: activeChain.themeColor }}
          >
            <span>Ouvrir {activeChain.name} (Se connecter)</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Status Tracker */}
        <div className="cart-builder-summary-bar">
          <div className="cart-progress-stat">
            <CheckCircle2 size={18} className="text-green-600" />
            <span>
              <strong>{addedItemsCount}</strong> / {allItems.length} articles ajoutés au panier
            </span>
          </div>

          {missingItems.length > 0 && (
            <div className="cart-missing-stat">
              <AlertTriangle size={18} className="text-amber-600" />
              <span>
                <strong>{missingItems.length}</strong> article{missingItems.length > 1 ? 's' : ''} non disponible{missingItems.length > 1 ? 's' : ''}
              </span>
            </div>
          )}

          {Object.keys(cartStatus).length > 0 && (
            <button
              type="button"
              className="btn-reset-cart-status"
              onClick={handleResetCartStatus}
              title="Réinitialiser le suivi du panier"
            >
              <RotateCcw size={13} />
              <span>Réinitialiser</span>
            </button>
          )}
        </div>
      </div>

      {/* 1-Click Search List for Active Chain */}
      <div className="one-click-search-box">
        <div className="search-box-header">
          <div className="search-box-title-group">
            <Search size={20} className="search-title-icon" />
            <h3>Assistant Panier 1-Clic ({filteredItems.length} articles)</h3>
          </div>

          <div className="search-quick-filter">
            <input
              type="text"
              placeholder="Filtrer les articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="filter-articles-input"
            />
          </div>
        </div>

        <div className="one-click-items-grid">
          {filteredItems.map((item) => {
            const searchUrl = activeChain.searchUrl(item.cleanQuery);
            const status = cartStatus[item.key];

            return (
              <div 
                key={item.key} 
                className={`store-item-card ${status === 'added' ? 'item-status-added' : ''} ${status === 'missing' ? 'item-status-missing' : ''}`}
                id={`store-item-btn-${item.key}`}
              >
                <div className="store-item-left">
                  <span className="store-dept-emoji">{item.deptIcon}</span>
                  <div className="store-item-names">
                    <span className="store-item-title">{item.name}</span>
                    <span className="store-item-qty">
                      Quantité : <strong>{item.displayQuantity} {item.displayUnit}</strong>
                    </span>
                    {item.storeBadge && (
                      <span className="store-promo-label">
                        {item.storeBadge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="store-item-actions-group">
                  {/* Bouton 1 : Chercher sur l'épicerie en 1 clic */}
                  <a
                    href={searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-store-search-link"
                    title={`Chercher "${item.cleanQuery}" sur ${activeChain.name}`}
                    style={{ backgroundColor: activeChain.bgColor, color: activeChain.themeColor }}
                    onClick={() => {
                      // Marquer automatiquement comme consulté si non encore coché
                      if (!cartStatus[item.key]) {
                        setItemStatus(item.key, 'added');
                      }
                    }}
                  >
                    <span>Chercher sur {activeChain.name}</span>
                    <ExternalLink size={14} />
                  </a>

                  {/* Bouton 2 : Valider comme ajouté au panier */}
                  <button
                    type="button"
                    className={`btn-cart-check ${status === 'added' ? 'is-active-added' : ''}`}
                    onClick={() => setItemStatus(item.key, 'added')}
                    title="Marquer cet article comme ajouté au panier de l'épicerie"
                  >
                    <Check size={16} />
                    <span className="btn-cart-status-text">Ajouté</span>
                  </button>

                  {/* Bouton 3 : Signaler comme non trouvé / non disponible */}
                  <button
                    type="button"
                    className={`btn-cart-missing ${status === 'missing' ? 'is-active-missing' : ''}`}
                    onClick={() => setItemStatus(item.key, 'missing')}
                    title="Signaler comme non disponible ou introuvable sur cette épicerie"
                  >
                    <AlertTriangle size={15} />
                    <span className="btn-cart-status-text">Non dispo</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section des Articles Non Ajoutés / Non Disponibles */}
      {missingItems.length > 0 && (
        <div className="missing-items-card animate-fade-in" id="missing-items-section">
          <div className="missing-card-header">
            <div className="missing-title-left">
              <AlertTriangle size={20} className="text-amber-500" />
              <h3>Articles Non Ajoutés / Introuvables ({missingItems.length})</h3>
            </div>
            <button
              type="button"
              className="btn-copy-missing"
              onClick={handleCopyMissingItems}
            >
              {copiedMissing ? <Check size={16} color="#16a34a" /> : <Copy size={16} />}
              <span>{copiedMissing ? 'Copié !' : 'Copier les articles manquants'}</span>
            </button>
          </div>

          <p className="missing-card-desc">
            Ces articles n'ont pas pu être ajoutés à votre commande en ligne chez {activeChain.name}. Vous pouvez les acheter en magasin ou choisir un produit de substitution :
          </p>

          <ul className="missing-items-list">
            {missingItems.map(item => (
              <li key={item.key} className="missing-item-row">
                <div className="missing-item-info">
                  <span className="missing-item-icon">{item.deptIcon}</span>
                  <span className="missing-item-name"><strong>{item.name}</strong></span>
                  <span className="missing-item-qty">({item.displayQuantity} {item.displayUnit})</span>
                </div>
                <button
                  type="button"
                  className="btn-resolve-missing"
                  onClick={() => setItemStatus(item.key, 'added')}
                >
                  <Check size={14} />
                  <span>Marquer comme trouvé / substitué</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Advice Box for Online Grocery Ordering in Quebec */}
      <div className="quebec-grocery-tips-card">
        <div className="tips-card-header">
          <TrendingDown size={22} className="tips-icon" />
          <h4>Astuces pour vos commandes en ligne au Québec</h4>
        </div>
        <div className="tips-content-grid">
          <div className="tip-box">
            <strong>Égalisation des prix (Maxi) :</strong>
            <p>Utilisez le site Circulaires.com pour vérifier les spéciaux de Super C ou IGA et demandez l'égalisation des prix à la caisse.</p>
          </div>
          <div className="tip-box">
            <strong>Formats Club & Viandes (Super C) :</strong>
            <p>Super C propose souvent des emballages économiques de bœuf haché, porc et poulet parfaits pour la plancha.</p>
          </div>
          <div className="tip-box">
            <strong>Cueillette sans frais :</strong>
            <p>Plusieurs bannières (Maxi PC Express, Walmart, Metro) offrent la cueillette à l'auto gratuite pour les commandes de plus de 35$ à 50$.</p>
          </div>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="stores-bottom-actions">
        <button
          type="button"
          className="btn-back-link"
          onClick={onGoToStep3}
        >
          ← Retour à la Liste d'Épicerie
        </button>

        <button
          type="button"
          className="btn-primary-glow btn-large-cta"
          onClick={handleCopyFormattedList}
          id="btn-bottom-copy-final"
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
          <span>{copied ? 'Liste copiée avec succès !' : 'Copier toute la liste pour mes courses'}</span>
        </button>
      </div>
    </div>
  );
}
