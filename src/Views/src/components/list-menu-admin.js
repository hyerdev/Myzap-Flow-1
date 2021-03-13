import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BarChartIcon from '@material-ui/icons/BarChart';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export const mainListItems = (
  <div>

    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <BusinessCenterIcon />
      </ListItemIcon>
      <ListItemText primary="Pedidos" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <EmojiPeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuários" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Funcionários" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <WhatsAppIcon />
      </ListItemIcon>
      <ListItemText primary="WhatsApp" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Estatísticas" />
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opções rápidas</ListSubheader>

    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>

  </div>
);