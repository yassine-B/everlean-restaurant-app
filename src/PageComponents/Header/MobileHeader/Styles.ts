export const styles = {
  header_container:
    'fixed z-50 flex flex-row justify-between w-full h-12 bg-gray-200 px-4 items-center',
  header_overlay: 'fixed z-20 w-full h-100vh bg-gray-800',
  header_menu_list: 'flex items-center justify-between w-24',
  header_menu_list_content: 'flex items-center w-14',
  header_menu_button: 'pl-1 pr-1',
  header_navigation_list:
    'fixed z-30 flex flex-col items-center gap-2 w-full bg-primary text-gray-50 py-6'
};
export const mobileMenuVariants = {
  hidden: { y: '-100%' },
  visible: { y: '48px' }
};
export const mobileIconVariants = {
  open: { rotate: [45, 90] },
  closed: { rotate: 0 }
};
