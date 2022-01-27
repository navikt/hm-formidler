// Ikkje heilt trivielt å bruke translation i ein enum. Kan vurdere å utvide til å ta inn alle strengar,
// ikkje kun dei som er definert under:
export enum Opplesingstekst {
  Neste = 'Neste',
  Forrige = 'Forrige',
}

type LesOppTekstProps = {
  tekst: Opplesingstekst
}

// Ved opplesing av ekstra tekst av UU-grunnar kan denne komponenten bli brukt, t.d. for Neste- og Forrige-knapp
const LesOppTekst = (props: LesOppTekstProps) => {
  return <span style={{ display: 'hidden' }} aria-label={props.tekst} />
}

export default LesOppTekst
