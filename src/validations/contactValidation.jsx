import * as Yup from "yup";

export const contactValdationSchema = Yup.object().shape({
  fullname: Yup.string().required("نام و نام خانوادگی الزامی است"),
  email: Yup.string()
    .email("آدرس ایمیل الزامی است")
    .required("آدرس ایمیل الزامی است"),
  subject: Yup.string().required("نوشتن عوان الزامی است"),
  massage: Yup.string().required("نوشتن پیام الزامی است"),
  recapcha: Yup.string().required("کپچا الزامی است"),
});
