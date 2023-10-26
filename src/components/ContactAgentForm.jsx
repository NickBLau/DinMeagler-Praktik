import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import isEmailValidator from "validator/lib/isEmail";
import React from "react";

import Paragraph from "./ParagraphProp";

import styled from "styled-components";
import Heading from "./HeadingProp";
import Button from "./ButtonProp";

const StyledForm = styled.form`
  width: 650px;
  border: 1px solid gray;
  padding: 40px;
  display: flex;
  flex-direction: column;

  align-self: center;
  margin-bottom: 20px;
`;
const StyledDecorativeLine = styled.div`
  width: 60px;
  height: 4px;
  background-color: #162a41;
  margin-top: 12px;
  margin-bottom: 34px;
`;

const StyledInput = styled.input`
  width: 275px;
  height: 60px;
  padding: 10px;
  font-size: 18px;
  line-height: 30px;
  color: #7b7b7b;
  border: 1px solid gray;
  margin-bottom: 10px;
`;

const StyledInputLong = styled.input`
  width: 570px;
  height: 60px;
  padding: 10px;
  font-size: 18px;
  line-height: 30px;
  color: #7b7b7b;
  border: 1px solid gray;
  margin-bottom: 10px;
`;

const StyledMessage = styled.textarea`
  width: 570px;
  height: 180px;
  padding: 10px;
  padding-bottom: 120px;
  font-size: 18px;
  line-height: 30px;
  color: #7b7b7b;
  border: 1px solid gray;
  margin-bottom: 10px;
  resize: none;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 10px;
  font-size: 18px;
  line-height: 30px;
  color: #333333;
`;

const schema = yup
  .object({
    Navn: yup
      .string()
      .required("Navn skal udfyldes")
      .min(2, "Navn skal være mindst 2 tegn langt")
      .max(50, "Navn må højst være 50 tegn langt"),
    Email: yup
      .string()
      .email("Email er ikke en gyldig e-mail")
      .required("Email skal udfyldes")
      .test(
        "is-valid",
        (message) => `${message.path} er ikke en gyldig e-mail`,
        (value) =>
          value
            ? isEmailValidator(value)
            : new yup.ValidationError("er ikke en gyldig e-mail")
      ),
    Emne: yup
      .string()
      .required("Emne skal udfyldes")
      .min(4, "Emne skal være mindst 4 tegn langt"),
    Besked: yup
      .string()
      .required("Besked skal udfyldes")
      .min(10, "Din besked skal være mindst 10 tegn langt"),
    Submitted: yup.string(),
  })
  .required();

const ContactAgent = () => {
  let { id } = useParams();
  const [response, setResponse] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: `https://dinmaegler.onrender.com/agents/${id}`,
        };

        const { data } = await axios.request(options);

        setResponse(data);
      } catch (error) {}
    };

    fetchData();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data) + console.log(errors);
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="on">
      <div className="Flex-directionColumn">
        <Heading
          title={"Kontakt " + response?.name}
          size="20"
          weight="bold"
          as="h2"
          lineheight="30"
          color="2A2C30"
        ></Heading>
        <StyledDecorativeLine></StyledDecorativeLine>
        <div className="Flex Gap-20">
          <StyledLabel>
            Navn
            <StyledInput
              type="text"
              placeholder="Indtast navn"
              {...register("Navn")}
            />
            <p className="redText">{errors.Navn?.message}</p>
          </StyledLabel>
          <StyledLabel>
            Email
            <StyledInput
              type="email"
              placeholder="Indtast email"
              noValidate
              {...register("Email")}
            />
            <p className="redText">{errors.Email?.message}</p>
          </StyledLabel>
        </div>
        <StyledLabel>
          Emne
          <StyledInputLong
            type="text"
            placeholder="Hvad drejer din henvendelse sig om?"
            {...register("Emne")}
          />
          <p className="redText">{errors.Emne?.message}</p>
        </StyledLabel>
        <StyledLabel>
          Besked
          <StyledMessage
            type="textarea"
            placeholder="Skriv din besked her..."
            {...register("Besked")}
          />
          <p className="redText">{errors.Besked?.message} :</p>
        </StyledLabel>
        <Button
          text={"Send besked"}
          size="18"
          as="button"
          lineheight="30"
          color="FFFFFF"
          backgroundcolor="162A41"
          width="168"
          height="62"
        ></Button>
      </div>
    </StyledForm>
  );
};
export default ContactAgent;
