const page = ({ params }: { params: { projectId: string } }) => {
  if (!params.projectId) {
    return <div>Invalid Project ID</div>;
  }

  if (!process.env.WIDGET_URL) {
    return <div>Invalid Widget URL</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground">
        Embed the code in our site
      </p>

      <div className="bg-blue-950 p-6 rounded-md mt-2">
        <code className="text-white">
          {`<my-widget formId="${params.projectId}"></my-widget>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
      </div>
    </div>
  );
};

export default page;
