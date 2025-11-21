# Script to initialize git and push to GitHub
# Run this after installing Git for Windows

# Initialize git repository
git init

# Add the remote repository
git remote add origin https://github.com/BerkeZavaro/Site-Generator.git

# Add all files
git add .

# Commit all changes
git commit -m "Initial commit: Next.js site generator with creatine microsites"

# Set main branch
git branch -M main

# Push to GitHub (you may need to authenticate)
git push -u origin main

Write-Host "Done! Check https://github.com/BerkeZavaro/Site-Generator to verify."

