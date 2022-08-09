import axios from "axios";
import { useCallback, useState } from "react";

import {
  StyledSection,
  Container,
  FormWrapper,
  Form,
  InputWrapper,
  InputLink,
  ShortenWrapper,
} from "./styles/Shorten.styled";
import { ShortenBtn } from "./styles/Button.styled";
import ShortLinkCard from "./ShortLinkCard";

function Shorten() {
  const [value, setValue] = useState("");
  const [isValueEmpty, setIsValueEmpty] = useState(null);
  const [links, setLinks] = useState([]);

  async function getData() {
    try {
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${value}`
      );
      const data = res.data;
      const temp = {
        key: data.result.code,
        original: data.result.original_link,
        short: data.result.full_short_link,
      };

      if (data.ok) {
        setLinks([...links, temp]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleInput(e) {
    if (isValueEmpty) {
      setIsValueEmpty(false);
    }
    setValue(e.target.value);
  }

  // Out Focus
  function handleBlur() {
    setValue(value.replace(/\s/g, ""));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (value.trim().length === 0) {
      return setIsValueEmpty(true);
    }
    getData();
  }

  useCallback(() => {}, []);

  return (
    <StyledSection>
      <Container>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <InputLink
                type="url"
                name="url"
                value={value}
                placeholder="Shorten a link here..."
                pattern="(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)"
                onInput={handleInput}
                onBlur={handleBlur}
                className={isValueEmpty ? "invalid" : ""}
              />
              {isValueEmpty ? <i>Please add a link</i> : ""}
            </InputWrapper>
            <ShortenBtn type="submit">Shorten It!</ShortenBtn>
          </Form>
        </FormWrapper>
        <ShortenWrapper>
          {links.map((item) => {
            return <ShortLinkCard key={item.key} url={item} />;
          })}
        </ShortenWrapper>
      </Container>
    </StyledSection>
  );
}

export default Shorten;
