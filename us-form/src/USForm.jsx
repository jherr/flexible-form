import React from "react";
import { FormInput, InputGroup, InputGroupAddon } from "shards-react";

import strings from "strings/strings";

const USForm = ({ register, errors }) => (
  <div
    style={{
      padding: "1em",
      border: "5px dashed green",
    }}
  >
    <InputGroup className="mb-2">
      <InputGroupAddon type="prepend">Address 1</InputGroupAddon>
      <FormInput
        invalid={(errors.address || {}).first !== undefined}
        name="address.first"
        innerRef={register({
          required: true,
        })}
      />
    </InputGroup>
    <InputGroup className="mb-2">
      <InputGroupAddon type="prepend">Address 2</InputGroupAddon>
      <FormInput
        invalid={(errors.address || {}).second !== undefined}
        name="address.second"
        innerRef={register({
          required: true,
        })}
      />
    </InputGroup>
    <InputGroup className="mb-2">
      <InputGroupAddon type="prepend">City</InputGroupAddon>
      <FormInput
        invalid={(errors.address || {}).city !== undefined}
        name="address.city"
        innerRef={register({
          required: true,
        })}
      />
    </InputGroup>
    <InputGroup className="mb-2">
      <InputGroupAddon type="prepend">{strings.STATE}</InputGroupAddon>
      <FormInput
        invalid={(errors.address || {}).state !== undefined}
        name="address.state"
        innerRef={register({
          required: true,
        })}
      />
    </InputGroup>
  </div>
);

export default USForm;
