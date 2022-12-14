import {
  Container,
  FullLinkWrap,
  ShortLinkWrap,
} from "./styles/ShortLinkCard.styled";
import { CopyBtn } from "./styles/Button.styled";
import { useState } from "react";

function ShortLinkCard({ url }) {
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(url.short).then(() => {
      setIsBtnClicked(true);
    });
  };

  const handleBlur = () => setIsBtnClicked(false);

  return (
    <Container>
      <FullLinkWrap>
        <p>{url.original}</p>
      </FullLinkWrap>
      <ShortLinkWrap>
        <p>{url.short}</p>
        <CopyBtn
          className={isBtnClicked ? "copiedBtn" : ""}
          type="button"
          onClick={handleClick}
          onBlur={handleBlur}
        >
          {isBtnClicked ? "Copied!" : "Copy"}
        </CopyBtn>
      </ShortLinkWrap>
    </Container>
  );
}

export default ShortLinkCard;
