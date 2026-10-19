import React, { useState } from 'react';
import { X, Lock, Mail, User, KeyRound, AlertCircle, Check, Sparkles, Shield, ArrowLeft } from 'lucide-react';
import { loginWithEmail, registerWithEmail, loginWithGoogle, resetPassword } from '../services/authService';

export default function AuthModal({
  isOpen,
  initialView = 'login', // 'login' | 'register' | 'forgot'
  onAuthSuccess,
  onClose
}) {
  const [view, setView] = useState(initialView);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const resetForm = () => {
    setError('');
    setSuccessMsg('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSwitchView = (newView) => {
    resetForm();
    setView(newView);
  };

  const translateFirebaseError = (err) => {
    const code = err?.code || '';
    if (code === 'auth/wrong-password' || code === 'auth/invalid-credential') {
      return 'Courriel ou mot de passe incorrect.';
    }
    if (code === 'auth/user-not-found') {
      return 'Aucun compte associé à cette adresse courriel.';
    }
    if (code === 'auth/email-already-in-use') {
      return 'Cette adresse courriel est déjà utilisée par un autre compte.';
    }
    if (code === 'auth/weak-password') {
      return 'Le mot de passe doit comporter au moins 6 caractères.';
    }
    if (code === 'auth/invalid-email') {
      return 'Adresse courriel non valide.';
    }
    return err?.message || 'Une erreur est survenue lors de l\'authentification.';
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Veuillez renseigner votre courriel et mot de passe.');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const res = await loginWithEmail(email, password);
      setSuccessMsg('Connexion réussie ! Heureux de vous revoir.');
      setTimeout(() => {
        onAuthSuccess(res.user);
        onClose();
      }, 700);
    } catch (err) {
      setError(translateFirebaseError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Veuillez renseigner un courriel et un mot de passe.');
      return;
    }
    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Les deux mots de passe ne correspondent pas.');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const res = await registerWithEmail(email, password, displayName);
      setSuccessMsg('Votre compte a été créé avec succès ! Bienvenue sur Plancha-Master.');
      setTimeout(() => {
        onAuthSuccess(res.user);
        onClose();
      }, 700);
    } catch (err) {
      setError(translateFirebaseError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await loginWithGoogle();
      setSuccessMsg('Connexion avec Google réussie !');
      setTimeout(() => {
        onAuthSuccess(res.user);
        onClose();
      }, 700);
    } catch (err) {
      setError(translateFirebaseError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Veuillez renseigner votre adresse courriel.');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const res = await resetPassword(email);
      setSuccessMsg(res.message);
    } catch (err) {
      setError(translateFirebaseError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickDemoAdmin = async () => {
    setEmail('admin@planchamaster.ca');
    setPassword('admin123');
    setIsLoading(true);
    try {
      const res = await loginWithEmail('admin@planchamaster.ca', 'admin123');
      setSuccessMsg('Connexion Administrateur activée !');
      setTimeout(() => {
        onAuthSuccess(res.user);
        onClose();
      }, 500);
    } catch (err) {
      setError(translateFirebaseError(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" id="auth-modal">
      <div className="modal-content modal-auth-card animate-pop-in" onClick={(e) => e.stopPropagation()}>
        {/* En-tête */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <div className="auth-header-icon-badge">
              {view === 'login' && <Lock size={20} className="text-orange" />}
              {view === 'register' && <User size={20} className="text-orange" />}
              {view === 'forgot' && <KeyRound size={20} className="text-orange" />}
            </div>
            <div>
              <h2 className="editor-modal-title">
                {view === 'login' && 'Connexion à Plancha-Master'}
                {view === 'register' && 'Créer votre compte'}
                {view === 'forgot' && 'Mot de passe oublié'}
              </h2>
              <p className="auth-subtitle-text">
                {view === 'login' && 'Accédez à votre espace repas & synchronisation'}
                {view === 'register' && 'Rejoignez la communauté des chefs de famille'}
                {view === 'forgot' && 'Recevez un lien sécurisé de réinitialisation'}
              </p>
            </div>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Fermer">
            <X size={22} />
          </button>
        </div>

        <div className="auth-modal-body">
          {/* Messages de statut */}
          {error && (
            <div className="auth-error-banner animate-fade-in" role="alert">
              <AlertCircle size={17} />
              <span>{error}</span>
            </div>
          )}

          {successMsg && (
            <div className="auth-success-banner animate-fade-in" role="status">
              <Check size={17} />
              <span>{successMsg}</span>
            </div>
          )}

          {/* VUE 1 : CONNEXION */}
          {view === 'login' && (
            <form onSubmit={handleLogin} className="auth-form-layout">
              <div className="form-group">
                <label htmlFor="auth-email-input">
                  <Mail size={15} /> Adresse courriel :
                </label>
                <input
                  id="auth-email-input"
                  type="email"
                  className="form-control"
                  placeholder="exemple@courriel.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  autoFocus
                />
              </div>

              <div className="form-group">
                <div className="auth-label-row">
                  <label htmlFor="auth-password-input">
                    <KeyRound size={15} /> Mot de passe :
                  </label>
                  <button
                    type="button"
                    className="btn-link-subtle auth-forgot-link"
                    onClick={() => handleSwitchView('forgot')}
                  >
                    Mot de passe oublié ?
                  </button>
                </div>
                <input
                  id="auth-password-input"
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary-glow btn-auth-submit"
                disabled={isLoading}
                id="btn-auth-login-submit"
              >
                <Lock size={17} />
                <span>{isLoading ? 'Connexion en cours...' : 'Se connecter'}</span>
              </button>

              <div className="auth-divider">
                <span>ou continuer avec</span>
              </div>

              <button
                type="button"
                className="btn-google-auth"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                id="btn-auth-google-login"
              >
                <svg className="google-icon" viewBox="0 0 24 24" width="18" height="18">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Connexion rapide avec Google</span>
              </button>

              <div className="auth-footer-switch">
                <span>Pas de compte ?</span>
                <button
                  type="button"
                  className="btn-auth-switch-view"
                  onClick={() => handleSwitchView('register')}
                >
                  S'inscrire gratuitement
                </button>
              </div>

              {/* Raccourci Démo Admin */}
              <div className="auth-demo-shortcut">
                <button
                  type="button"
                  className="btn-link-demo-admin"
                  onClick={handleQuickDemoAdmin}
                  title="Se connecter directement avec le rôle Administrateur"
                >
                  <Shield size={14} />
                  <span>Accès express Rôle Administrateur (admin@planchamaster.ca)</span>
                </button>
              </div>
            </form>
          )}

          {/* VUE 2 : INSCRIPTION */}
          {view === 'register' && (
            <form onSubmit={handleRegister} className="auth-form-layout">
              <div className="form-group">
                <label htmlFor="register-name-input">
                  <User size={15} /> Prénom ou Nom :
                </label>
                <input
                  id="register-name-input"
                  type="text"
                  className="form-control"
                  placeholder="ex: Félix"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  autoFocus
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-email-input">
                  <Mail size={15} /> Adresse courriel :
                </label>
                <input
                  id="register-email-input"
                  type="email"
                  className="form-control"
                  placeholder="exemple@courriel.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-pwd-input">
                  <KeyRound size={15} /> Mot de passe (min 6 caractères) :
                </label>
                <input
                  id="register-pwd-input"
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-pwd-confirm-input">
                  <KeyRound size={15} /> Confirmer le mot de passe :
                </label>
                <input
                  id="register-pwd-confirm-input"
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary-glow btn-auth-submit"
                disabled={isLoading}
                id="btn-auth-register-submit"
              >
                <Sparkles size={17} />
                <span>{isLoading ? 'Création en cours...' : 'Créer mon compte'}</span>
              </button>

              <div className="auth-divider">
                <span>ou s'inscrire avec</span>
              </div>

              <button
                type="button"
                className="btn-google-auth"
                onClick={handleGoogleLogin}
                disabled={isLoading}
              >
                <svg className="google-icon" viewBox="0 0 24 24" width="18" height="18">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Inscription rapide avec Google</span>
              </button>

              <div className="auth-footer-switch">
                <span>Déjà un compte ?</span>
                <button
                  type="button"
                  className="btn-auth-switch-view"
                  onClick={() => handleSwitchView('login')}
                >
                  Se connecter
                </button>
              </div>
            </form>
          )}

          {/* VUE 3 : MOT DE PASSE OUBLIÉ */}
          {view === 'forgot' && (
            <form onSubmit={handleForgotPassword} className="auth-form-layout">
              <p className="auth-desc-text">
                Indiquez votre adresse courriel ci-dessous. Nous vous enverrons immédiatement un lien pour réinitialiser votre mot de passe.
              </p>

              <div className="form-group">
                <label htmlFor="forgot-email-input">
                  <Mail size={15} /> Adresse courriel :
                </label>
                <input
                  id="forgot-email-input"
                  type="email"
                  className="form-control"
                  placeholder="exemple@courriel.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="btn-primary-glow btn-auth-submit"
                disabled={isLoading}
              >
                <Mail size={17} />
                <span>{isLoading ? 'Envoi en cours...' : 'Envoyer le lien de réinitialisation'}</span>
              </button>

              <div className="auth-footer-switch">
                <button
                  type="button"
                  className="btn-link-subtle"
                  onClick={() => handleSwitchView('login')}
                >
                  <ArrowLeft size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                  Retour à la connexion
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
