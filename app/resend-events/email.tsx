interface EmailTemplateProps {
  data: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  data,
}) => (
  <div>
    <h1>{data}</h1>
  </div>
);
