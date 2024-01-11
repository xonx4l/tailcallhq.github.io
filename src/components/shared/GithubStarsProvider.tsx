import React, {createContext, useEffect, useState, ReactNode} from "react"

// Define the context type
type GithubStarsContextType = number | null

// Create the context
export const GithubStarsContext = createContext<GithubStarsContextType>(null)

// Storage utility to get and set data
const storage = {
  get(key: string) {
    if (typeof window !== "undefined" && window["__tc_data__"]) {
      return window["__tc_data__"][key]
    }
    return null
  },

  set(key: string, val: any) {
    if (typeof window !== "undefined") {
      window["__tc_data__"] = window["__tc_data__"] || {}
      window["__tc_data__"][key] = val
    }
  },
}

type GithubStarsProviderProps = {
  children: ReactNode
}

export default function GithubStarsProvider({children}: GithubStarsProviderProps) {
  const [starsCount, setStarsCount] = useState<number | null>(storage.get("githubStars"))

  // Fetch Github stars count
  function fetchGithubStars() {
    return fetch("https://api.github.com/repos/tailcallhq/tailcall")
      .then((resp) => resp.json())
      .then((resp) => {
        const respStarsCount = resp.stargazers_count || "250"
        setStarsCount(respStarsCount)
        storage.set("githubStars", respStarsCount)
        return respStarsCount
      })
  }

  // Fetch stars count on component mount
  useEffect(() => {
    fetchGithubStars()
  }, [])

  // Provide the stars count value through context
  return <GithubStarsContext.Provider value={starsCount}>{children}</GithubStarsContext.Provider>
}