export const authSelector = state =>
  state.get('auth')

export const isAuthenticatedSelector = state => 
  !!state.getIn(['auth', 'signedIn'])

export const adminCharitiesSelector = state =>
  state.get('adminCharities')

export const adminDonorsSelector = state =>
  state.get('adminDonors')

export const adminProductsSelector = state =>
  state.get('adminProducts')

export const adminAuctionsSelector = state =>
  state.get('adminAuctions')

export const adminUsersSelector = state =>
  state.get('adminUsers')

export const adminMediaSelector = state =>
  state.get('adminMedia')

export const adminSalesSelector = state =>
  state.get('adminSales')

export const adminBlogSelector = state =>
  state.get('adminBlog')

export const adminSettingsSelector = state =>
  state.get('adminSettings')

export const adminNotificationsSelector = state =>
  state.get('adminNotifications')

export const accountSelector = state =>
  state.get('account')

export const auctionsSelector = state =>
  state.get('auctions')

export const blogSelector = state =>
  state.get('blog')

export const postsSelector = state =>
  state.get('posts')

export const donorsSelector = state =>
  state.get('donors')

export const jobsSelector = state =>
  state.get('jobs')

export const categoriesMenuSelector = state =>
  state.get('settings').get('categoriesMenuItems').toJS()

export const countriesSelector = state =>
  state.get('settings').get('countries').toJS()

export const modalSelector = state =>
  state.get('modal')
