import axios from "axios";
import { useEffect, useState } from "react";

import {
  StyledDiv,
  Container,
  FormWrapper,
  Form,
  InputWrapper,
  InputLink,
  ShortenWrapper,
} from "./styles/Shorten.styled";
import { ShortenBtn } from "./styles/Button.styled";
import ShortLinkCard from "./ShortLinkCard";
import toast from "react-hot-toast";

function Shorten() {
  const baseApi = axios.create({
    baseURL: 'https://cleanuri.com/api/v1/',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });

  const [value, setValue] = useState("");
  const [isValueEmpty, setIsValueEmpty] = useState(null);
  const [links, setLinks] = useState([]);
  const STORAGE_KEY = "URL_SHORTENING_APP";

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

  async function getData() {
    try {
      const res = await baseApi.post(
        `shorten`, {
          url: value
        }
      );

      const data = res.data;
      const temp = {
        key: new Date().getTime(),
        original: value,
        short: data.result_url,
      };

      setLinks([...links, temp]);
      saveData([...links, temp]);
    } catch (error) {
      let message = 'Internal Server Error'

      if (error.response.data?.error) {
        message = error.response.data.error
      } else if (error.request) {
        message = `Request Error: ${error.message}`
      }

      toast.error(message, {
        position: 'top-right'
      })
    }
  }

  function isStorageExist() /* boolean */ {
    if (typeof Storage === "undefined") {
      alert("Your browser doesn't support session storage");
      return false;
    }
    return true;
  }

  function saveData(data) {
    if (isStorageExist()) {
      const parsed = JSON.stringify(data);
      sessionStorage.setItem(STORAGE_KEY, parsed);
      console.log("save data");
    }
  }

  function loadDataFromStorage() {
    const serializedData = sessionStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);

    if (data !== null) {
      setLinks(data);
      console.log("load data");
    }
  }

  useEffect(() => {
    loadDataFromStorage();
  }, []);

  return (
    <StyledDiv>
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
    </StyledDiv>
  );
}

export default Shorten;
