import React from 'react';
import { X, Sparkles, Calendar, CheckCircle2, Flame, Tag } from 'lucide-react';

export default function ReleaseNotesModal({ releaseNotes, onClose, onMarkAllAsRead }) {
  if (!releaseNotes || releaseNotes.length === 0) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" id="release-notes-modal">
      <div className="modal-content modal-release-notes animate-pop-in" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <div className="release-icon-badge">
              <Sparkles size={20} className="text-orange" />
            </div>
            <div>
              <h2 className="editor-modal-title">Nouveautés & Mises à Jour</h2>
              <span className="release-subtitle">Dernières améliorations déployées sur Plancha-Master</span>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={() => {
              if (onMarkAllAsRead) onMarkAllAsRead();
              onClose();
            }}
            aria-label="Fermer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body : Timeline des mises à jour */}
        <div className="release-notes-body">
          {releaseNotes.map((note) => (
            <div key={note.id} className="release-card">
              <div className="release-card-header">
                <div className="release-badges-row">
                  <span className="release-version-pill">{note.version}</span>
                  <span
                    className="release-tag-pill"
                    style={{ backgroundColor: `${note.tagColor}18`, color: note.tagColor, borderColor: `${note.tagColor}40` }}
                  >
                    {note.tag}
                  </span>
                </div>
                <div className="release-date-badge">
                  <Calendar size={13} />
                  <span>{note.displayDate}</span>
                </div>
              </div>

              <h3 className="release-title">{note.title}</h3>
              {note.summary && <p className="release-summary">{note.summary}</p>}

              <div className="release-highlights-list">
                {note.highlights.map((h, idx) => (
                  <div key={idx} className="release-item">
                    <div className="release-item-icon">{h.icon}</div>
                    <div className="release-item-text">
                      <strong>{h.title}</strong>
                      <p>{h.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button
            type="button"
            className="btn-primary btn-full-width"
            onClick={() => {
              if (onMarkAllAsRead) onMarkAllAsRead();
              onClose();
            }}
          >
            <CheckCircle2 size={18} />
            <span>J'ai compris, merci !</span>
          </button>
        </div>
      </div>
    </div>
  );
}
