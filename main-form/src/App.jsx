import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { FormInput, InputGroup, InputGroupAddon } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

const FormComponent = React.lazy(() => import("form/Form"));
import Strings from "strings/strings";

import "./index.css";

const App = () => {
  const { register, errors } = useForm({
    mode: "all",
    reValidateMode: "all",
    defaultValues: {
      name: "Jack",
      address: {
        first: "",
        second: "",
        city: "",
        state: "",
      },
    },
  });

  return (
    <div
      style={{
        margin: "auto",
        width: 1200,
        padding: "1em",
      }}
    >
      <h1>Language: {navigator.language}</h1>
      {Strings.HELLO}
      <InputGroup className="mb-2">
        <InputGroupAddon type="prepend">Name</InputGroupAddon>
        <FormInput
          invalid={errors.name !== undefined}
          name="name"
          innerRef={register({
            required: true,
          })}
        />
      </InputGroup>
      <React.Suspense fallback={<div>Loading form</div>}>
        <FormComponent register={register} errors={errors} />
      </React.Suspense>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
