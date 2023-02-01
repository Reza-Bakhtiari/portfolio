import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
  return (
    <Typography variant="body1" color="#000000" textAlign="left" sx={{ mt: 2 }}>
      {children}
      <KeyboardArrowLeftRounded
        sx={{
          verticalAlign: "bottom",
          color: "primary.main",
        }}
      />
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی : رضا بختیاری</Info>
      <Info>سن : 18</Info>
      <Info>شهر : اراک</Info>
      <Info>rezabakhtiari7334@gmail.com : آدرس ایمیل</Info>
      <Info>شماره موبایل : 09984562535</Info>
    </>
  );
};

export default DevInfo;
