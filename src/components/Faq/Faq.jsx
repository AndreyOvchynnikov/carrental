import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";
import Container from "components/Container";
import { faqData } from '../../data/faqData';
import s from './Faq.module.css';

const defaultActiveQ = faqData[0].id;

const Faq = () => {
  const [activeQ, setActiveQ] = useState(defaultActiveQ);
    
  const handleClick = (event) => {
    const currentId = event.currentTarget.name;

    if (currentId === activeQ) {
      setActiveQ("");
      return;
    }
    setActiveQ(currentId);
  }

  return (
    <>
      <section className={s.faqSection}>
        <Container>
          <div className={s.faqContent}>
            <div className={s.faqContentTitle}>
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>
            <ul className={s.allQuestions}>
              {faqData.map((topic, index) => {
                const { question, answer, id } = topic;
                return (
                  <li className={s.faqBox} key={id}>
                    <button
                      type="button"
                      name={id}
                      onClick={handleClick}
                    >
                      <div className={activeQ !== id ? s.faqBoxQuestion : s.activeQuestion}>
                        <p>{`${index + 1}. ${question}`}</p>
                        <IconChevronDown />
                      </div>
                      <div className={activeQ !== id ? s.faqBoxAnswer : s.activeAnswer}>
                        {answer}
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Faq;
