// import Routes from '@common/defs/routes';
import { useTheme } from '@mui/material/styles';
import {
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { alpha, Box, Stack } from '@mui/system';
import { useRouter } from 'next/router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

interface FooterItemProps {
  label: string;
  link: string;
}
const SocialMedia = [
  { href: '/', icon: <LinkedInIcon fontSize="large" /> },
  { href: '/', icon: <XIcon fontSize="large" /> },
  { href: '/', icon: <YouTubeIcon fontSize="large" /> },
  { href: '/', icon: <InstagramIcon fontSize="large" /> },
  { href: '/', icon: <FacebookIcon fontSize="large" /> },
];

const Footer = () => {
  const footerItems: FooterItemProps[] = [
    {
      label: 'Vie privée & Cookies',
      link: '/',
    },
    {
      label: 'Mentions légales',
      link: '/',
    },
  ];
  const isFooterItemsEven = footerItems.length % 2 === 0;
  const router = useRouter();
  const currenttheme = useTheme();
  const mdScreen = useMediaQuery(currenttheme.breakpoints.down('md'));
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        zIndex: 100,
        backgroundColor: 'primary.main',
        width: '100%',
        paddingY: { xs: 2, md: 6 },
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '15px',
        color: 'common.white',
      }}
    >
      {(!isFooterItemsEven || mdScreen) && (
        <Box sx={{ marginBottom: 2 }}>
          <Stack flexDirection="row" alignItems="center" flexGrow={1}>
            <Box
              component="img"
              src="/logoBlue.svg"
              onClick={() => router.push('/')}
              sx={{
                width: 'auto',
                height: 50,
                cursor: 'pointer',
                mr: 1,
              }}
            />
            <Typography variant="h3" sx={{ color: 'info.main' }}>
              Neurokinesis
            </Typography>
          </Stack>
        </Box>
      )}
      <Box sx={{ display: 'flex', marginBottom: { xs: 0, md: 1.7 } }}>
        {!isFooterItemsEven || mdScreen ? (
          <List
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 2, md: 0 },
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {footerItems.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  onClick={() => router.push(item.link)}
                  sx={{
                    cursor: 'pointer',
                    width: 'fit-content',
                    borderLeft: { xs: 0, md: 1 },
                    paddingY: 0,
                    borderLeftColor: 'primary.lighter',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                    ...(footerItems.length === index + 1 && {
                      borderRight: { xs: 0, md: 1 },
                      borderRightColor: 'primary.lighter',
                    }),
                  }}
                >
                  <ListItemText sx={{ marginY: 0 }}>{item.label}</ListItemText>
                </ListItem>
              );
            })}
            <Divider
              sx={{
                marginY: { xs: 2, md: 0 },
                display: { xs: 'block', md: 'none' },
                borderColor: (theme) => alpha(theme.palette.primary.lighter, 0.4),
                borderWidth: 0.5,
                width: '100%',
              }}
            />
          </List>
        ) : (
          <>
            <List
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {footerItems.slice(0, Math.ceil(footerItems.length / 2)).map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    onClick={() => router.push(item.link)}
                    sx={{
                      cursor: 'pointer',
                      width: 'fit-content',
                      borderLeft: 1,
                      paddingY: 0,
                      borderLeftColor: 'primary.lighter',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                      ...(footerItems.length / 2 === index + 1 && {
                        borderRight: 1,
                        borderRightColor: 'primary.lighter',
                      }),
                    }}
                  >
                    <ListItemText sx={{ marginY: 0 }}>{item.label}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
            <Box
              sx={{
                paddingX: 4,
              }}
            >
              <Stack flexDirection="row" alignItems="center" flexGrow={1}>
                <Box
                  component="img"
                  src="/logoBlue.svg"
                  onClick={() => router.push('/')}
                  sx={{
                    width: 'auto',
                    height: 40,
                    cursor: 'pointer',
                    mr: 1,
                  }}
                />
              </Stack>
            </Box>
            <List
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {footerItems.slice(Math.ceil(footerItems.length / 2)).map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    onClick={() => router.push(item.link)}
                    sx={{
                      cursor: 'pointer',
                      width: 'fit-content',
                      borderLeft: 1,
                      paddingY: 0,
                      borderLeftColor: 'primary.lighter',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                      ...(footerItems.length / 2 === index + 1 && {
                        borderRight: 1,
                        borderRightColor: 'primary.lighter',
                      }),
                    }}
                  >
                    <ListItemText sx={{ marginY: 0 }}>{item.label}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </>
        )}
      </Box>

      <Box
        sx={{
          fontSize: '13px',
        }}
      >
        <Typography
          sx={{
            color: 'text.secondary',
            marginBottom: 1,
            textAlign: 'center',
          }}
        >
          ©{new Date().getFullYear()} Neurokinesis. All rights reserved.
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {SocialMedia.map((social, index) => (
          <Grid item key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              href={social.href}
              color="inherit"
              sx={{
                color: 'common.white',
                fontSize: 2,
                '&:hover': {
                  color: 'info.main',
                },
              }}
            >
              {social.icon}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Footer;
