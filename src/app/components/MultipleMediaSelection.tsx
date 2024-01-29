

type MediaInfoType = {
    media: any,
    setMedia: any
}

export default function MultipleMediaSelection({media, setMedia}: MediaInfoType) {

  return (
    <div>
        Did you mean...
        <br></br>
        {media.map((show: any) => {
            return (
                <div key={show.id}>
                    <button onClick={() => setMedia([show])} >
                        {show.name}
                    </button>
                </div>
            )
        })}
    </div>
  )
}
