ssh -o StrictHostKeyChecking=no azureuser@20.55.25.47 <<HTML

    cd /home/azureuser/Github-Actions
    
    git pull --rebase origin main

HTML