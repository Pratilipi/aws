AWS_PROJ_ID="381780986962"
DOCKER_IMAGE="node:hello-world"

ECR_IMAGE=$AWS_PROJ_ID.dkr.ecr.ap-southeast-1.amazonaws.com/$DOCKER_IMAGE

sudo docker build --tag $ECR_IMAGE .

