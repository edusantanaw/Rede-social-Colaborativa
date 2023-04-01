import React from "react";
import { useAuth } from "../../../hooks/auth";
import { useFetching } from "../../../hooks/useFetching";
import { formatImage } from "../../../utils/formatImage";
import { InviteContainer } from "../styles";
import { Button, ClickAwayListener, Typography } from "@mui/material";
import { acceptOrDeclineInvite } from "../../../../services/project";

type invite = {
  id: string;
  name: string;
  perfilImage: string;
};

interface props {
  handleClose: () => void;
}

const Invites = ({ handleClose }: props) => {
  const { user } = useAuth();

  const { data, error } = useFetching<invite[]>({
    url: `/projects/invites/${user?.id}`,
  });

  async function handleInvite(status: boolean, inviteId: string) {
    try {
      const response = await acceptOrDeclineInvite({
        accepted: status,
        inviteId,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <InviteContainer>
        <h3>Convites</h3>
        <ul>
          {data ? (
            data.map((item) => (
              <li>
                <div className="project">
                  <img
                    src={formatImage(item.perfilImage)}
                    alt="project_image"
                  />
                  <span>{item.name}</span>
                </div>
                <div className="actions">
                  <Button
                    sx={{ fontSize: "0.5em" }}
                    variant="contained"
                    color="secondary"
                    onClick={() => handleInvite(true, item.id)}
                  >
                    Aceitar
                  </Button>
                  <Button
                    sx={{ fontSize: "0.5em" }}
                    variant="contained"
                    color="error"
                    onClick={() => handleInvite(false, item.id)}
                  >
                    Recusar
                  </Button>
                </div>
              </li>
            ))
          ) : (
            <Typography fontSize="0.7em">Nenhum convite encontrado</Typography>
          )}
        </ul>
      </InviteContainer>
    </ClickAwayListener>
  );
};

export default Invites;
