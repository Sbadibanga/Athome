
export const parseRequestURL = () => {
  const url = document.location.hash.toLowerCase();
  const request = url.split('/');
  return {
    resource: request[1],
    id: request[2],
    action: request[3],
  };
};

export const rerender = async(component) =>{
  document.getElementById('menu-products').innerHTML = await component.render();
  await component.after_render();
}
