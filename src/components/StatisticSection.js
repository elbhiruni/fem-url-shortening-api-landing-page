import {
  Container,
  TextWrapper,
  Title,
  Paragraph,
  CardWrapper,
  Line,
} from "./styles/StatisticSection.styled";
import Card from "./Card";

import { ReactComponent as IconBrandRecognition } from "../images/icon-brand-recognition.svg";
import { ReactComponent as IconDetailedRecords } from "../images/icon-detailed-records.svg";
import { ReactComponent as IconFullyCustomizable } from "../images/icon-fully-customizable.svg";

function StatisticSection() {
  return (
    <section>
      <Container>
        <TextWrapper>
          <Title>Advanced Statistics</Title>
          <Paragraph>
            Track how your links are performing accross the web with our
            advanced statistics dashboard.
          </Paragraph>
        </TextWrapper>
        <CardWrapper>
          <Card
            image={<IconBrandRecognition />}
            title="Brand Recognition"
            paragraph="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          />
          <Line />
          <Card
            image={<IconDetailedRecords />}
            title="Detailed Records"
            paragraph="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <Line />
          <Card
            image={<IconFullyCustomizable />}
            title="Fully Customizable"
            paragraph="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </CardWrapper>
      </Container>
    </section>
  );
}

export default StatisticSection;
