BRANCH=$1

if [ "$BRANCH" == "main" ]; then
  DEPLOY_PATH="/home/azureuser/Github-Actions"
elif [ "$BRANCH" == "stage" ]; then
  DEPLOY_PATH="/home/azureuser/stage"
fi

ssh -o StrictHostKeyChecking=no azureuser@20.55.25.47 <<HTML

    cd $DEPLOY_PATH

    git pull --rebase origin $BRANCH

HTML