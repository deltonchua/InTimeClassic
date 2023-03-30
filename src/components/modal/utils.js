export const showModal = (id) => {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'grid';
  // disableScroll();
};

export const hideModal = (id) => {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'none';
  // enableScroll();
};

const disableScroll = () => {
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.top = `-${window.scrollY}px`;
};

const enableScroll = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
};
