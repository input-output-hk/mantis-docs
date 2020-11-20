import "fontsource-montserrat/500.css";
import "fontsource-montserrat/600.css";
import "fontsource-montserrat/700.css";

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This tutorial has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}