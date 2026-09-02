# Resolution du problème d'exécution PowerShell (npm.ps1)

Si le build échoue sous Windows avec l'erreur `PSSecurityException` / `UnauthorizedAccess` :

1. Débloquez l'exécution des scripts dans PowerShell en exécutant la commande suivante :
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

2. Alternativement, utilisez `npm.cmd` au lieu de `npm` dans votre terminal PowerShell :
```powershell
npm.cmd run build
```
