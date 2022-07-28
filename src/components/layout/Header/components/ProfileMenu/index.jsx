import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { ProfileIcon } from 'components/ui-kit/icons/iconComponents/ProfileIcon'
import CustomTypography from 'components/ui-kit/Typography'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import { useHeaderController } from '../../controller/useHeaderController'
import { ROUTE_PATHS } from 'utils/constants'
import { StyledMenu, StyledProfileDiv, StyledMenuItem } from 'components/layout/Header/styles'
import { adminLogout } from 'redux-thunk/thunk/Auth/Auth'

const ProfileMenu = ({ adminLogout }) => {
  const {
    anchorElUser,
    setAnchorElUser,
    NAV_MENU_OPTIONS,
    t,
    navigate,
    toggleUserMenu
  } = useHeaderController()

  const menuItems = [
    {
      label: t(NAV_MENU_OPTIONS.settings),
      icon: <SettingsIcon />,
      handler: () => {
        setAnchorElUser(null)
        navigate(ROUTE_PATHS.settings)
      }
    },
    {
      label: t(NAV_MENU_OPTIONS.logout),
      icon: <LogoutIcon />,
      handler: () => {
        setAnchorElUser(null)
        adminLogout(navigate)
      }
    }
  ]

  return (
    <>
      <StyledProfileDiv
        onClick={toggleUserMenu}
      >
        <>
          <ProfileIcon style={{ width: 20, height: 20 }} />
          {t('user')}
          {!anchorElUser ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </>
      </StyledProfileDiv>
      <StyledMenu
        mt='45px'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={e => toggleUserMenu(e, true)}
      >
        {menuItems.map((menuItem) => (
          <StyledMenuItem
            key={menuItem.label}
            onClick={() => {
              menuItem.handler()
            }}
            width='160px'
          >
            {menuItem.icon}
            <CustomTypography align='center' sx={{ ml: 1 }} value={menuItem.label} />
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  )
}

ProfileMenu.propTypes = {
  adminLogout: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    adminLogout: (navigate) => dispatch(adminLogout({ navigate }))
  }
}

export default connect(null, mapDispatchToProps)(ProfileMenu)
