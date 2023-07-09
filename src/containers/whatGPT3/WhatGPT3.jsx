import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="GPT-3, or Generative Pre-trained Transformer 3, is a large language model chatbot developed by OpenAI. It is a powerful tool that can generate human-like text, translate languages, write different kinds of creative content, and answer your questions in an informative way."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Chatbots are computer programs that are designed to simulate conversation with human users. They are often used in customer service applications, where they can answer questions and resolve issues. Chatbots can also be used for marketing and advertising, or for providing information or entertainment."
        />
        <Feature
          title="Knowledgebase"
          text="GPT-3 does not have a single, centralized knowledgebase. Instead, it uses a variety of sources to access information, including: The internet: GPT-3 can access and process information from the internet, including text from websites, Wikipedia, and books. Specific knowledge bases: GPT-3 can be trained on specific knowledge bases, such as medical or legal knowledge bases. This allows it to provide more accurate and relevant information for specific topics. User input: GPT-3 can also learn from user input. When a user asks a question, GPT-3 can use the question to access information from the internet or from a specific knowledge base. It can also use the question to learn new information."
        />
        <Feature
          title="Education"
          text="GPT-3 can be used for education purposes in a variety of ways, including: Personalized learning: GPT-3 can be used to create personalized learning experiences that are tailored to each student's individual needs and interests. This can be done by using GPT-3 to generate practice problems, assessments, and feedback that are specifically designed for each student. Research: GPT-3 can be used to help students with their research. This can be done by using GPT-3 to find relevant information, summarize research papers, and generate new ideas. Generative writing: GPT-3 can be used to help students with their writing skills. This can be done by using GPT-3 to generate prompts, provide feedback, and help students to improve their grammar and style."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
