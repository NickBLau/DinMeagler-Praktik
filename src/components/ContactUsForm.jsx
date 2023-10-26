import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import isEmailValidator from "validator/lib/isEmail";
import React from "react";

import styled from "styled-components";
import Button from "./ButtonProp";
import Paragraph from "./ParagraphProp";

const StyledForm = styled.form`
  width: 650px;
  height: 710px;
  border: 1px solid gray;
  padding: 30px;
  display: flex;
  flex-direction: column;

  align-self: center;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 275px;
  height: 60px;
  padding: 10px;
  font-size: 18px;
  line-height: 30px;
  color: #7b7b7b;
  border: 1px solid gray;
`;

const StyledInputLong = styled.input`
  width: 570px;
  height: 60px;
  padding: 10px;
  font-size: 18px;
  line-height: 30px;
  color: #7b7b7b;
  border: 1px solid gray;
`;

const StyledInputCheckbox = styled.input`
  width: 28px;
  height: 28px;
  font-size: 18px;
  line-height: 30px;
  color: #d3dee8;
  border: 1px solid gray;
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

const StyledInputSubmit = styled.input`
  font-size: 18px;
  line-height: 30px;
  color: #ffffff;
  background-color: #162a41;
  width: 168px;
  height: 62px;
  margin-top: 20px;
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
  })
  .required();

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data) + console.log(errors);
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="Flex-directionColumn">
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
        </div>{" "}
        <StyledLabel>
          Emne
          <StyledInputLong
            type="text"
            placeholder="Indtast emne"
            {...register("Emne")}
          />
          <p className="redText">{errors.Emne?.message}</p>
        </StyledLabel>
        <StyledLabel>
          Besked
          <StyledMessage
            type="textarea"
            placeholder="Indtast din besked..."
            {...register("Besked")}
          />{" "}
          <p className="redText">{errors.Besked?.message}</p>
        </StyledLabel>
        <div className="Flex Gap-10">
          <StyledInputCheckbox
            type="checkbox"
            {...register("Subscribed")}
          ></StyledInputCheckbox>
          <Paragraph
            text={"Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev."}
            size="16"
            as="p"
            lineheight="28"
            color="333333"
          ></Paragraph>
        </div>
        <StyledInputSubmit
          type="submit"
          placeholder="Send besked"
        ></StyledInputSubmit>
      </div>
    </StyledForm>
  );
};

export default ContactUsForm;
