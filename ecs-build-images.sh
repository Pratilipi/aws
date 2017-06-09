STAGE=$1

if [ "$STAGE" != "devo" -a "$STAGE" != "prod" ]
then
  echo "syntax: bash ecs-build-images.sh <stage>"
  exit 0
fi


bash ecs-build-image.sh $STAGE node:7.8.0
