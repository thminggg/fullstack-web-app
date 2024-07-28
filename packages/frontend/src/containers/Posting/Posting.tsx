import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import PostingForm from "../../components/PostingForm/PostingForm";
import { useAuth } from "../../hooks/useAuth";

export default function Posting() {
  const { pending, user } = useAuth();
  if (pending) <Loader />;

  return (
    <>
      {!user?.broker_id && (
        <>
          <div className="flex items-center mt-3 gap-3">
            <span>Only brokers can post a property</span>
            <Link to="/login">
              <Button>Be a broker</Button>
            </Link>
          </div>
          <div className="mt-12">Following form is for demo purpose:</div>
        </>
      )}
      <PostingForm brokerId={user?.broker_id} />
    </>
  );
}
