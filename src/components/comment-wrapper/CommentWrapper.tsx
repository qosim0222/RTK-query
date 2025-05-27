

const CommentWrapper = ({ comments }: { comments?: any[] }) => {
  return (
    <div>
      {comments?.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentWrapper;

