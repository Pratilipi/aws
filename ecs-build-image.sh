STAGE=$1
DOCKER_IMAGE=$2

if [ "$STAGE" != "devo" -a "$STAGE" != "prod" ] || [ "$DOCKER_IMAGE" == "" ]
then
  echo "syntax: bash ecs-build-image.sh <stage> <docker-image:version>"
  exit 0
fi


if [ $STAGE == "devo" ]
then
  AWS_PROJ_ID="381780986962"
elif [ $STAGE == "prod" ]
then
  AWS_PROJ_ID="to-do"
fi

ECR_IMAGE=$AWS_PROJ_ID.dkr.ecr.ap-southeast-1.amazonaws.com/$DOCKER_IMAGE


cat ecs-dockerfile | sed "s/\$STAGE/$STAGE/g" | sed "s/\$DOCKER_IMAGE/$DOCKER_IMAGE/g" > Dockerfile
sudo docker build --tag $ECR_IMAGE .
rm Dockerfile

sudo docker push $ECR_IMAGE

