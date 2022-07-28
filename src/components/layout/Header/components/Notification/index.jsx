import { NotificationIcon } from 'components/ui-kit/icons/iconComponents/NotificationIcon'
import { useDispatch } from 'react-redux'
import { openWarningToaster } from 'utils/common-services/toaster.services'
import { StyledIconButton } from 'components/layout/Header/styles'
import { useHeaderController } from '../../controller/useHeaderController'

const Notification = () => {
  const { t } = useHeaderController()
  const dispatch = useDispatch()

  const showNotification = () => {
    openWarningToaster(dispatch, t('noPendingNotification'))
  }

  return (
    <StyledIconButton onClick={showNotification}>
      <NotificationIcon style={{ width: 20, height: 20 }} />
    </StyledIconButton>
  )
}

export default Notification
