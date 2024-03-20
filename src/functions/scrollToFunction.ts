export function scrollToFunction(event: React.MouseEvent<HTMLAnchorElement>) {
  const target = event.target as HTMLAnchorElement;
  const section = document.getElementById(`${target.textContent}Id`);
  window.scrollTo({
    top: section!.offsetTop - window.innerHeight * 0.1,
    behavior: "smooth",
  });
}
