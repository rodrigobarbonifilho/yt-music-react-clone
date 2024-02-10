import { StyledHeader } from "./style";
import { ab}

export default function Header() {
  return (
    <StyledHeader>
      <div className="logo">
        <ion-icon name="menu-outline"></ion-icon>
        <img src="/logo_dark.svg" />
      </div>
      <div className="input-section">
        <input
          type="text"
          placeholder="Pesquise músicas, álbuns, artistas, podcasts"
        />
        <div className="account-section">

        </div>
      </div>
    </StyledHeader>
  );
}
