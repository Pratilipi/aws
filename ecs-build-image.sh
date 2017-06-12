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
  GCP_PROJ_ID="devo-pratilipi"
  API_END_POINT="internal-pratilipi-devo-elb-internal-2113898828.ap-southeast-1.elb.amazonaws.com"
elif [ $STAGE == "prod" ]
then
  AWS_PROJ_ID="to-do"
  GCP_PROJ_ID="prod-pratilipi"
  API_END_POINT="to-do"
fi

ECR_IMAGE=$AWS_PROJ_ID.dkr.ecr.ap-southeast-1.amazonaws.com/$DOCKER_IMAGE


cat ecs-dockerfile \
  | sed "s/\$STAGE/$STAGE/g" \
  | sed "s/\$DOCKER_IMAGE/$DOCKER_IMAGE/g" \
  | sed "s/\$AWS_PROJ_ID/$AWS_PROJ_ID/g" \
  | sed "s/\$GCP_PROJ_ID/$GCP_PROJ_ID/g" \
  | sed "s/\$API_END_POINT/$API_END_POINT/g" \
  > Dockerfile
sudo docker build --tag $ECR_IMAGE .
rm Dockerfile

sudo docker push $ECR_IMAGE

