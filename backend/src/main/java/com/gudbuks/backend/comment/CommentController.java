package com.gudbuks.backend.comment;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/comments")
@AllArgsConstructor
public class CommentController {

    private CommentRepo commentRepo;

    @GetMapping
    public List<Comment> findAll(){
        return commentRepo.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Comment> findById(@PathVariable UUID id){
        return commentRepo.findById(id);
    }

    @PostMapping
    public Comment create(@RequestBody Comment comment){
        comment.setId(null);
        return commentRepo.save(comment);
    }

    @PutMapping
    public Comment update(@RequestBody Comment comment){
        return commentRepo.save(comment);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id){
        commentRepo.deleteById(id);
    }
}
