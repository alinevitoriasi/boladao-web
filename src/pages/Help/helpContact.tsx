import { Link } from '@mui/material';

/* eslint-disable react/react-in-jsx-scope */
const contacts: Array<{ title: any; content: any }> = [
  {
    title: ' CVV (Centro de Valorização da Vida)',
    content: (
      <>
        Telefone: 188 <br />
        Atendimento 24 horas para apoio emocional e prevenção ao suicídio.
      </>
    ),
  },
  {
    title: 'Disque Direitos Humanos (Disque 100)',
    content: (
      <>
        Telefone: 100 <br />
        Canal para denúncias de violações de direitos humanos, como racismo,
        violência contra mulheres, crianças e adolescentes, entre outros.
      </>
    ),
  },
  {
    title: 'Fala.BR',
    content: (
      <>
        {' '}
        O Fala.BR é um canal integrado para encaminhamento de manifestações
        (acesso a informação, denúncias, reclamações, solicitações, sugestões,
        elogios) a órgãos e entidades do poder público. Para denúncias, utilize
        a plataforma Fala BR, disponível no site:
        <Link sx={{ mx: 2 }} href='https://falabr.cgu.gov.br/web/home'>
          https://falabr.cgu.gov.br/web/home
        </Link>
      </>
    ),
  },
  {
    title: 'Polícia Militar',
    content: (
      <>
        Telefone: 190 <br />
        Utilizado em casos de emergências de segurança pública.
      </>
    ),
  },
];

export default contacts;
