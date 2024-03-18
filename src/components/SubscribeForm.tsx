import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

export default function SubscribeForm() {
  const [data, setData] = React.useState<{
    email: string;
    status: "initial" | "loading" | "failure" | "sent";
  }>({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} id="demo">
      <FormControl>
        <Input
          sx={{ "--Input-decoratorChildHeight": "45px" }}
          placeholder="mail@mui.com"
          type="email"
          required
          value={data.email}
          onChange={(event) =>
            setData({ email: event.target.value, status: "initial" })
          }
          error={data.status === "failure"}
          endDecorator={
            <Button
              variant="solid"
              loading={data.status === "loading"}
              type="submit"
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, backgroundColor: "#4a9af5" }}
            >
              Inscrever-se
            </Button>
          }
        />
        {data.status === "failure" && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
          >
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}
        {data.status === "sent" && (
          <FormHelperText sx={() => ({ color: "white" })}>
            Você está inscrito!
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}
