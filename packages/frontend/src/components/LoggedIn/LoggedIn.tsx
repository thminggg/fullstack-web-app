import { useMutation, useQuery } from "@apollo/client";
import { signOut } from "firebase/auth";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrokerCompany } from "../../../../db/@types";
import { useFirebaseContext } from "../../containers/Firebase/FirebaseProvider";
import { BE_BROKER } from "../../graphql/mutations/beBroker";
import { GET_BROKER_COMPANIES } from "../../graphql/queries/getBrokerCompanies";
import { useAuth } from "../../hooks/useAuth";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

type BrokerCompaniesQueryResult = {
  brokerCompanies: {
    data: BrokerCompany[];
  };
};

const LoggedIn = () => {
  const { firebaseAuth } = useFirebaseContext();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [beBroker, { data, loading, error }] = useMutation(BE_BROKER);

  // Get broker companies
  const { data: brokerCompanies } =
    useQuery<BrokerCompaniesQueryResult>(GET_BROKER_COMPANIES);

  const [companyId, setCompanyId] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const handleBroker = () => {
    if (companyId === "" || phone === "") {
      console.error("Error missing broker company or phone number");
      setMsg("Missing broker company or phone number");
      return;
    }

    beBroker({
      variables: {
        beBrokerData: {
          brokerCompanyId: companyId,
          email: user?.email,
          phone,
        },
      },
    }).catch((err) => console.error(err));
  };

  const handleSignOut = () => {
    if (firebaseAuth) {
      signOut(firebaseAuth).catch((error) => {
        console.error(`Error firebase signout: ${error}`);
      });
    }
  };

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  if (data && user) {
    // Update user object with broker_id returned from mutation
    user.broker_id = data.beBroker;
  }

  return (
    <div className="flex flex-col mt-3 gap-3">
      <div>{user?.displayName}</div>
      {msg && <div className="text-red-500">{msg}</div>}
      {!user?.broker_id && brokerCompanies && (
        <>
          <div>
            <Label htmlFor="brokerCompany" value="Broker Company" />
            <Select
              id="brokerCompany"
              onChange={(e) => setCompanyId(e.target.value)}
            >
              <option key="empty" value="">
                {`<Empty Broker>`}
              </option>
              {brokerCompanies?.brokerCompanies?.data?.map((company) => (
                <option
                  key={company.broker_company_id}
                  value={company.broker_company_id}
                >
                  {company.name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor="phone" value="Phone" />
            <TextInput
              id="phone"
              type="text"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <Button className="mt-3" onClick={handleBroker}>
            Be a Broker
          </Button>
        </>
      )}
      <div className="flex flex-col gap-3 mt-3">
        <Button
          onClick={() => {
            navigate("/posting");
          }}
        >
          Post a Property
        </Button>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </div>
    </div>
  );
};

export default LoggedIn;
