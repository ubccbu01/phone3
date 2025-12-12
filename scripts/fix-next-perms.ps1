# Run this script AS ADMINISTRATOR in PowerShell to take ownership of .next and remove it
# Usage: Right-click PowerShell -> Run as Administrator, then:
#   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process; .\scripts\fix-next-perms.ps1

$project = "C:\Users\admin\Desktop\pages\next\phone-next15"
$next = Join-Path $project ".next"

Write-Host "Taking ownership of $next (recursive)..."
try {
    takeown /F "$next" /R /D Y | Write-Host
} catch {
    Write-Warning "takeown failed: $_"
}

Write-Host "Granting full control to current user (recursive)..."
try {
    icacls "$next" /grant "$env:USERNAME:F" /T | Write-Host
} catch {
    Write-Warning "icacls failed: $_"
}

Write-Host "Removing $next ..."
try {
    Remove-Item -Recurse -Force "$next"
    Write-Host "$next removed"
} catch {
    Write-Warning "Failed to remove $next: $_"
}

Write-Host "Done. Now try running: npm run dev"
