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
  HelpCircle,
  TrendingDown,
  Info
} from 'lucide-react';
import { GROCERY_CHAINS, cleanSearchQuery, formatGroceryListForClipboard } from '../utils/storeLinks';

export default function Step4OnlineStores({
  groceryDepartments,
  portions,
  selectedRecipes,
  onGoToStep3
}) {
  const [selectedChainId, setSelectedChainId] = useState('superc');
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const activeChain = GROCERY_CHAINS.find(c => c.id === selectedChainId) || GROCERY_CHAINS[0];

  const handleCopyFormattedList = () => {
    const formatted = formatGroceryListForClipboard(groceryDepartments, portions, selectedRecipes);
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Extraire tous les ingrédients sous forme de liste plate
  const allItems = [];
  Object.values(groceryDepartments).forEach((dept) => {
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

  return (
    <div className="step-page-container animate-fade-in" id="step-4-stores-screen">
      {/* Top Banner */}
      <div className="stores-header-bar">
        <div className="stores-header-info">
          <div className="hero-tagline">
            <span className="hero-pill">Étape 4 sur 4</span>
            <span className="hero-subpill">Épiceries du Québec</span>
          </div>
          <h1 className="stores-page-title">Commandes en Ligne & Liens Épiceries</h1>
          <p className="stores-page-subtitle">
            Trouvez instantanément vos ingrédients chez <strong>Super C, Maxi, IGA, Metro ou Walmart</strong> en 1 clic grâce aux recherches directes préconfigurées.
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
            <span>{copied ? 'Liste copiée !' : 'Copier tout le panier'}</span>
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
              Magasiner chez <span style={{ color: activeChain.themeColor }}>{activeChain.name}</span>
            </h3>
            <p className="chain-active-desc">
              Cliquez sur n'importe quel ingrédient ci-dessous pour ouvrir automatiquement la page de recherche exacte sur {activeChain.name}.
            </p>
          </div>

          <a
            href={activeChain.homeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-open-store-home"
            id="btn-open-active-store-home"
          >
            <span>Accéder au site officiel {activeChain.name}</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Chain Advantages */}
        <div className="chain-advantages-row">
          {activeChain.advantages.map((adv, idx) => (
            <div key={idx} className="chain-adv-item">
              <CheckCircle2 size={15} className="adv-check-icon" style={{ color: activeChain.themeColor }} />
              <span>{adv}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 1-Click Search List for Active Chain */}
      <div className="one-click-search-box">
        <div className="search-box-header">
          <div className="search-box-title-group">
            <Search size={20} className="search-title-icon" />
            <h3>Recherche d'articles en 1 clic ({filteredItems.length} articles)</h3>
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

            return (
              <div key={item.key} className="store-item-card" id={`store-item-btn-${item.key}`}>
                <div className="store-item-left">
                  <span className="store-dept-emoji">{item.deptIcon}</span>
                  <div className="store-item-names">
                    <span className="store-item-title">{item.name}</span>
                    <span className="store-item-qty">
                      Besoin : <strong>{item.displayQuantity} {item.displayUnit}</strong>
                    </span>
                  </div>
                </div>

                <a
                  href={searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-store-search-link"
                  title={`Chercher "${item.cleanQuery}" sur ${activeChain.name}`}
                  style={{ backgroundColor: activeChain.bgColor, color: activeChain.themeColor }}
                >
                  <span>Chercher sur {activeChain.name}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Advice Box for Online Grocery Ordering in Quebec */}
      <div className="quebec-grocery-tips-card">
        <div className="tips-card-header">
          <TrendingDown size={22} className="tips-icon" />
          <h4>Astuces pour économiser sur votre épicerie au Québec</h4>
        </div>
        <div className="tips-content-grid">
          <div className="tip-box">
            <strong>Égalisation des prix (Maxi) :</strong>
            <p>Utilisez l'application Flipp ou Reebee et présentez les circulaires de Super C ou IGA à la caisse de Maxi pour obtenir les plus bas prix.</p>
          </div>
          <div className="tip-box">
            <strong>Formats Club & Viandes (Super C) :</strong>
            <p>Super C propose souvent des emballages économiques de bœuf haché, porc et poulet parfaits pour être portionnés et cuits sur la plancha.</p>
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
