"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const UserFAQ = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const res = await axios.get(`${apiUrl}/faq`);
        const publishedFaqs =
          res.data?.data?.filter((faq) => faq.status === "published") || [];
        setFaqs(publishedFaqs);
      } catch (err) {
        console.error("Failed to load FAQs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, [apiUrl]);

  return (
    <section className="bg-white py-10 xl:container xl:mx-auto px-4 md:px-8">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <CircularProgress />
        </div>
      ) : (
        <div className="grid  gap-6 max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <Accordion
              key={faq._id}
              sx={{
                boxShadow: "none",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                overflow: "hidden",
                "&:before": { display: "none" },

                // fix first accordion radius
                "&:first-of-type": {
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                },
                "&:last-of-type": {
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${faq._id}`}
              >
                <h1 className={"text-xl font-semibold"}> {faq.question}</h1>
              </AccordionSummary>
              <AccordionDetails className="bg-white px-4 py-2 text-gray-700 rounded-b-xl">
                <Typography className="text-sm">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      )}
    </section>
  );
};

export default UserFAQ;
