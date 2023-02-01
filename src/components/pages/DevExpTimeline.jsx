import { useState, useEffect } from "react";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { SchoolRounded } from "@mui/icons-material";
import { Typography, Slide } from "@mui/material";
import { devEdu } from "../../constants/details";

const DevExpTimeline = () => {
  const [loading, setLoadings] = useState(false);

  useEffect(() => {
    setLoadings(true);

    return () => {
      setLoadings(false);
    };
  }, []);

  return (
    <>
      <Timeline position="right" sx={{ direction: "ltr" }}>
        {devEdu.map((item, index) => (
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="warning" variant="outlined">
                  <SchoolRounded color="warning" />
                </TimelineDot>
                {index !== 3 ? <TimelineConnector /> : null}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="caption" color="grey">
                  {item.year}
                </Typography>
                <Typography variant="body1" color="black">
                  {item.cert}
                </Typography>
                <Typography variant="body2" color="black">
                  {item.major}
                </Typography>
                <Typography variant="body2" color="black">
                  {item.place}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Slide>
        ))}
      </Timeline>
    </>
  );
};

export default DevExpTimeline;
