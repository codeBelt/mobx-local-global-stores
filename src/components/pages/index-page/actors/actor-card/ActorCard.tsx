import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Cast } from 'domains/shows/shows.graphql';

interface IProps {
  readonly cardData: Cast;
}

export const ActorCard: React.FC<IProps> = (props) => {
  const image: string = props.cardData?.character?.image?.medium ?? '';
  const missingImage = 'https://react.semantic-ui.com/images/wireframe/image.png';

  return (
    <Card key={props.cardData.person?.name}>
      <Card.Content>
        <Image floated="right" size="mini" src={image || missingImage} />
        <Card.Header>{props.cardData.person?.name}</Card.Header>
        <Card.Meta>as {props.cardData.character?.name}</Card.Meta>
        <Card.Description>
          <strong>Birth date:</strong> {props.cardData.person?.birthday}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

ActorCard.displayName = 'ActorCard';
ActorCard.defaultProps = {};
