import React, { useState, useMemo } from 'react';
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
  Layers,
  Zap,
  FastForward,
  ChevronRight,
  ChevronLeft,
  ListFilter
} from 'lucide-react';
import {
  GROCERY_CHAINS,
  cleanSearchQuery,
  formatGroceryListForClipboard,
  formatGroceryItemsForBulkSearch,
  copyTextToClipboard
} from '../utils/storeLinks';

export default function Step4OnlineStores({
  groceryDepartments,
  portions,
  selectedRecipes,
  onGoToStep3
}) {
  const [selectedChainId, setSelectedChainId] = useState('maxi');
  const [copied, setCopied] = useState(false);
  const [copiedBulk, setCopiedBulk] = useState(false);
  const [copiedMissing, setCopiedMissing] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Suivi de l'état du panier : { [itemKey]: 'added' | 'missing' }
  const [cartStatus, setCartStatus] = useState({});

  // Index actuel pour l'Assistant Auto-Pilote
  const [autoPilotIndex, setAutoPilotIndex] = useState(0);

  const activeChain = GROCERY_CHAINS.find(c => c.id === selectedChainId) || GROCERY_CHAINS[0];

  // Extraire tous les ingrédients sous forme de liste plate non exclus
  const allItems = useMemo(() => {
    const items = [];
    Object.entries(groceryDepartments).forEach(([deptKey, dept]) => {
      if (deptKey === '_excludedItems' || !dept.items) return;
      dept.items.forEach((item) => {
        items.push({
          ...item,
          deptName: dept.name,
          deptIcon: dept.icon,
          cleanQuery: cleanSearchQuery(item.name)
        });
      });
    });
    return items;
  }, [groceryDepartments]);

  const filteredItems = allItems.filter(i =>
    i.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  // Copier toute la liste d'épicerie avec les rayons
  const handleCopyFormattedList = async () => {
    const formatted = formatGroceryListForClipboard(groceryDepartments, portions, selectedRecipes);
    const ok = await copyTextToClipboard(formatted);
    if (ok) {
      setCopied(true);
      triggerToast(`📋 Panier complet (${allItems.length} articles) copié dans le presse-papier !`);
      setTimeout(() => setCopied(false), 2500);
    } else {
      alert('Liste d\'épicerie :\n\n' + formatted);
    }
  };

  // Copier les mots-clés groupés pour recherche express
  const handleCopyBulkKeywords = async () => {
    const bulk = formatGroceryItemsForBulkSearch(allItems);
    const ok = await copyTextToClipboard(bulk);
    if (ok) {
      setCopiedBulk(true);
      triggerToast(`⚡ Mots-clés de recherche (${allItems.length} articles) copiés ! Collez-les dans la barre de recherche.`);
      setTimeout(() => setCopiedBulk(false), 2500);
    }
  };

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
    setAutoPilotIndex(0);
    triggerToast('Suivi de panier réinitialisé.');
  };

  const addedItemsCount = Object.values(cartStatus).filter(s => s === 'added').length;
  const missingItems = allItems.filter(item => cartStatus[item.key] === 'missing');

  const handleCopyMissingItems = async () => {
    if (missingItems.length === 0) return;
    const text = `⚠️ ARTICLES NON AJOUTÉS / NON DISPONIBLES (${activeChain.name})\n` +
      missingItems.map(i => `• ${i.name} (${i.displayQuantity} ${i.displayUnit})`).join('\n');
    const ok = await copyTextToClipboard(text);
    if (ok) {
      setCopiedMissing(true);
      triggerToast('Articles manquants copiés !');
      setTimeout(() => setCopiedMissing(false), 2500);
    }
  };

  // Auto-Pilote : Item en cours
  const currentAutoPilotItem = allItems[autoPilotIndex] || allItems[0];
  const autoPilotDoneCount = Object.keys(cartStatus).length;
  const autoPilotProgress = allItems.length > 0 ? Math.round((addedItemsCount / allItems.length) * 100) : 0;

  // Lancer l'article actuel dans l'épicerie et avancer automatiquement
  const handleAutoPilotSearchNext = () => {
    if (!currentAutoPilotItem) return;
    const searchUrl = activeChain.searchUrl(currentAutoPilotItem.cleanQuery);
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
    
    // Marquer comme ajouté
    setItemStatus(currentAutoPilotItem.key, 'added');

    // Passer au prochain article non traité
    const nextIdx = allItems.findIndex((item, idx) => idx > autoPilotIndex && !cartStatus[item.key]);
    if (nextIdx !== -1) {
      setAutoPilotIndex(nextIdx);
    } else if (autoPilotIndex < allItems.length - 1) {
      setAutoPilotIndex(autoPilotIndex + 1);
    }
  };

  // Ouvrir 5 articles en rafale
  const handleOpenBatch5 = () => {
    const unadded = allItems.filter(item => cartStatus[item.key] !== 'added');
    const batch = unadded.slice(0, 5);

    if (batch.length === 0) {
      triggerToast('Tous les articles ont déjà été ajoutés ! 🎉');
      return;
    }

    batch.forEach(item => {
      const searchUrl = activeChain.searchUrl(item.cleanQuery);
      window.open(searchUrl, '_blank', 'noopener,noreferrer');
      setItemStatus(item.key, 'added');
    });

    triggerToast(`🚀 ${batch.length} onglets de recherche ouverts chez ${activeChain.name} !`);
  };

  return (
    <div className="step-page-container animate-fade-in" id="step-4-stores-screen">
      {/* Toast Flottant de Confirmation */}
      {toastMessage && (
        <div className="floating-cart-toast animate-pop-in">
          <Check size={18} className="text-green-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Banner */}
      <div className="stores-header-bar">
        <div className="stores-header-info">
          <div className="hero-tagline">
            <span className="hero-pill">Étape 4 sur 4</span>
            <span className="hero-subpill">Bâtisseur de commande en ligne</span>
          </div>
          <h1 className="stores-page-title">Commandes en Ligne & Bâtisseur de Panier</h1>
          <p className="stores-page-subtitle">
            Gagnez du temps : construisez rapidement votre panier chez <strong>Maxi (PC Express), Super C, IGA, Metro ou Walmart</strong> grâce à l'Auto-Pilote et la recherche accélérée.
          </p>
        </div>

        <div className="stores-header-actions">
          <button
            type="button"
            className="btn-copy-clipboard-big"
            onClick={handleCopyFormattedList}
            id="btn-copy-all-stores"
            title="Copier toute la liste pour la coller où vous voulez"
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
              onClick={() => {
                setSelectedChainId(chain.id);
                setAutoPilotIndex(0);
              }}
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

      {/* =====================================================================
          ⚡ ASSISTANT AUTO-PILOTE : CONSTRUCTION RAPIDE DU PANIER
          ===================================================================== */}
      <div className="autopilot-panel-card" style={{ borderColor: activeChain.themeColor }}>
        <div className="autopilot-header">
          <div className="autopilot-badge">
            <Zap size={16} />
            <span>Mode Accéléré : Auto-Pilote de Commande</span>
          </div>
          <span className="autopilot-store-tag" style={{ color: activeChain.themeColor }}>
            Épicerie active : <strong>{activeChain.name}</strong>
          </span>
        </div>

        <div className="autopilot-body">
          <div className="autopilot-item-display">
            <div className="autopilot-item-meta">
              <span className="autopilot-step-count">
                Article {autoPilotIndex + 1} sur {allItems.length}
              </span>
              <div className="autopilot-item-title-row">
                <span className="autopilot-dept-emoji">{currentAutoPilotItem?.deptIcon}</span>
                <h3 className="autopilot-item-name">{currentAutoPilotItem?.name}</h3>
                <span className="autopilot-item-qty">
                  ({currentAutoPilotItem?.displayQuantity} {currentAutoPilotItem?.displayUnit})
                </span>
              </div>
              {currentAutoPilotItem?.storeBadge && (
                <span className="autopilot-promo-badge">
                  🏷️ Spécial {currentAutoPilotItem.storeBadge}
                </span>
              )}
            </div>

            <div className="autopilot-actions-primary">
              <button
                type="button"
                className="btn-autopilot-search-next"
                onClick={handleAutoPilotSearchNext}
                style={{ backgroundColor: activeChain.themeColor }}
                title={`Ouvrir "${currentAutoPilotItem?.cleanQuery}" chez ${activeChain.name} et passer au suivant`}
              >
                <span>Chercher & Ajouter chez {activeChain.name}</span>
                <ExternalLink size={18} />
              </button>

              <div className="autopilot-stepper-btns">
                <button
                  type="button"
                  className="btn-stepper-nav"
                  onClick={() => setAutoPilotIndex(Math.max(0, autoPilotIndex - 1))}
                  disabled={autoPilotIndex === 0}
                  title="Article précédent"
                >
                  <ChevronLeft size={18} />
                  <span>Précédent</span>
                </button>

                <button
                  type="button"
                  className="btn-stepper-nav"
                  onClick={() => setAutoPilotIndex(Math.min(allItems.length - 1, autoPilotIndex + 1))}
                  disabled={autoPilotIndex >= allItems.length - 1}
                  title="Passer à l'article suivant"
                >
                  <span>Suivant</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Bulk Actions Bar */}
          <div className="autopilot-quick-toolbar">
            <button
              type="button"
              className="btn-quick-batch"
              onClick={handleOpenBatch5}
              title="Ouvre 5 onglets en même temps pour les 5 prochains articles"
            >
              <FastForward size={15} />
              <span>Ouvrir les 5 prochains articles en rafale</span>
            </button>

            <button
              type="button"
              className="btn-quick-keywords"
              onClick={handleCopyBulkKeywords}
              title="Copie tous les mots-clés séparés par une virgule pour la recherche express"
            >
              {copiedBulk ? <Check size={15} color="#16a34a" /> : <Copy size={15} />}
              <span>{copiedBulk ? 'Mots-clés copiés !' : 'Copier les mots-clés pour recherche groupée'}</span>
            </button>

            <a
              href={activeChain.homeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-quick-store-home"
            >
              <span>Ouvrir {activeChain.name} (Panier)</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Progression */}
          <div className="autopilot-progress-container">
            <div className="autopilot-progress-info">
              <span><strong>{addedItemsCount}</strong> sur {allItems.length} articles traités ({autoPilotProgress}%)</span>
              {missingItems.length > 0 && (
                <span className="text-amber-600 font-bold">
                  ⚠️ {missingItems.length} article{missingItems.length > 1 ? 's' : ''} non disponible{missingItems.length > 1 ? 's' : ''}
                </span>
              )}
            </div>
            <div className="autopilot-progress-track">
              <div
                className="autopilot-progress-fill"
                style={{ width: `${autoPilotProgress}%`, backgroundColor: activeChain.themeColor }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* 1-Click Search List for Active Chain */}
      <div className="one-click-search-box">
        <div className="search-box-header">
          <div className="search-box-title-group">
            <Search size={20} className="search-title-icon" />
            <h3>Liste Complète des Articles ({filteredItems.length})</h3>
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
