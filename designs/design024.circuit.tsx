import { sel } from "tscircuit"

export default () => (
  <board width="10mm" height="10mm">
    <chip
      name="JP12"
      schY="-3.63"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: [
            "pin1",
            "pin2",
            "pin3",
            "pin4",
            "pin5",
            "pin6",
            "pin7",
            "pin8",
            "pin9",
            "pin10",
          ],
        },
      }}
    />
    <netlabel
      schX="1"
      schY="-2.728"
      net="D8"
      anchorSide="left"
      connection={sel.JP12.pin10}
    />
    <netlabel
      schX="1"
      schY="-2.928"
      net="D9"
      anchorSide="left"
      connection={sel.JP12.pin9}
    />
    <netlabel
      schX="1"
      schY="-3.128"
      net="D10"
      anchorSide="left"
      connection={sel.JP12.pin8}
    />
    <netlabel
      schX="1"
      schY="-3.328"
      net="COPI"
      anchorSide="left"
      connection={sel.JP12.pin7}
    />
    <netlabel
      schX="1"
      schY="-3.528"
      net="CIPO"
      anchorSide="left"
      connection={sel.JP12.pin6}
    />
    <netlabel
      schX="1"
      schY="-3.728"
      net="SCK"
      anchorSide="left"
      connection={sel.JP12.pin5}
    />
    <netlabel
      schX="0.8"
      schY="-4.7"
      anchorSide="top"
      net="GND"
      connection={sel.JP12.pin4}
    />
    <netlabel
      schX="1"
      schY="-4.128"
      net="AREF"
      anchorSide="left"
      connection={sel.JP12.pin3}
    />
    <netlabel
      schX="1"
      schY="-4.328"
      net="A4"
      anchorSide="left"
      connection={sel.JP12.pin2}
    />
    <netlabel
      schX="1"
      schY="-4.528"
      net="A5"
      anchorSide="left"
      connection={sel.JP12.pin1}
    />
  </board>
)
