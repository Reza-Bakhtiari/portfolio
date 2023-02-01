import { useTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { contactValdationSchema } from "../../validations/contactValidation";
import {
  Typography,
  CardContent,
  CardActions,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
} from "@mui/icons-material";

const ContactForm = () => {
  const theme = useTheme();

  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log("Form values : ", values);
    },
    validationSchema: contactValdationSchema,
  });

  return (
    <>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid container>
            <Grid xs={12} sx={{ direction: "ltr" }}>
              <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    color="warning"
                    label="نام و نام خانوادگی"
                    name="fullname"
                    variant="outlined"
                    helperText={
                      formik.touched.fullname ? formik.errors.fullname : null
                    }
                    error={Boolean(
                      formik.touched.fullname && formik.errors.fullname
                    )}
                    value={formik.values?.fullname}
                    onChange={formik.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Face6Rounded />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    size="small"
                    color="warning"
                    label="آدرس ایمیل"
                    name="email"
                    variant="outlined"
                    helperText={
                      formik.touched.email ? formik.errors.email : null
                    }
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    value={formik.values?.email}
                    onChange={formik.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailRounded />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid xs={12} md={12}>
                  <TextField
                    fullWidth
                    size="small"
                    color="warning"
                    label="عنوان"
                    name="subject"
                    variant="outlined"
                    helperText={
                      formik.touched.subject ? formik.errors.subject : null
                    }
                    error={Boolean(
                      formik.touched.subject && formik.errors.email
                    )}
                    value={formik.values?.subject}
                    onChange={formik.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SubjectRounded />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid xs={12} md={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    size="small"
                    color="warning"
                    label="متن پیام"
                    name="message"
                    variant="outlined"
                    helperText={
                      formik.touched.massage ? formik.errors.massage : null
                    }
                    error={Boolean(
                      formik.touched.massage && formik.errors.email
                    )}
                    value={formik.values?.massage}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ alignItems: "end", flexDirection: "column" }}>
          <ReCAPTCHA
            sitekey="6LcKbCokAAAAALRLVTbb1Zpe-tLWD2PEmmXoXUKy"
            theme={theme.palette.mode}
            hl="fa"
            onChange={(value) => {
              formik.setFieldValue("recaptcha", value);
            }}
          />
          {formik.errors.recaptcha && formik.touched.recaptcha && (
            <Typography variant="caption" color="error">
              {formik.errors.recaptcha}
            </Typography>
          )}
          <Button
            type="submit"
            color="success"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            {" "}
            ارسال کن
          </Button>
        </CardActions>
      </form>
    </>
  );
};

export default ContactForm;
